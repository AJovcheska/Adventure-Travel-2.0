package com.finki.repository;

import com.finki.domain.Category;
import com.finki.domain.Trip;
import com.finki.domain.TripDto;
import com.finki.mapper.TripMapper;
import com.finki.queries.TripQueries;
import com.finki.util.QueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TripRepositoryImpl implements TripRepository {

    private TripQueries tripQueries;
    private QueryBuilder queryBuilder;
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public TripRepositoryImpl(NamedParameterJdbcTemplate jdbcTemplate, TripQueries tripQueries, QueryBuilder queryBuilder) {
        this.jdbcTemplate = jdbcTemplate;
        this.tripQueries = tripQueries;
        this.queryBuilder = queryBuilder;
    }

    @Override
    public List<TripDto> findAll() {
        return jdbcTemplate.query(tripQueries.getSelectAll(), new TripMapper());
    }

    @Override
    public List<TripDto> findByCategory(String category) {
        return jdbcTemplate.query(tripQueries.getSelectByCategory(),
                new MapSqlParameterSource("category", category), new TripMapper());
    }

    @Override
    public List<TripDto> findByRegion(String region) {
        return jdbcTemplate.query(tripQueries.getSelectByRegion(),
                new MapSqlParameterSource("region", region), new TripMapper());
    }

    @Override
    public TripDto findById(String id) {
        String selectById = tripQueries.getSelectById();
        List<TripDto> list = jdbcTemplate.query(selectById,
                new MapSqlParameterSource("id", id), new TripMapper());
        if (list.size() != 1) {
            return null;
        }
        return list.get(0);
    }

    @Override
    public List<TripDto> findTripsForUser(String user) {
        return jdbcTemplate.query(tripQueries.getSelectTripsForUser(),
                new MapSqlParameterSource("user", user), new TripMapper());

    }

    @Override
    public void deleteTripFromUser(String username, String id) {
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("username", username);
        map.addValue("id", id);
        jdbcTemplate.update(tripQueries.getDeleteTripFromUser(),
                map);
    }

    @Override
    public void addTripForUser(String username, String id) {
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("username", username);
        map.addValue("tripId", id);
        jdbcTemplate.update(tripQueries.getAddTripForUser(),
                map);
    }

    @Override
    public void addTrip(Trip trip) {
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("category", trip.getCategory().name());
        map.addValue("region", trip.getRegion());
        map.addValue("country", trip.getCountry());
        map.addValue("title", trip.getTitle());
        map.addValue("price", trip.getPrice());
        map.addValue("tags", trip.getTags().substring(0, trip.getTags().length()-1));
        map.addValue("duration", trip.getDuration());
        map.addValue("dateFrom", trip.getDepartureDate());
        map.addValue("dateTo", trip.getEndDateToSign());
        map.addValue("destination", trip.getDestination());
        map.addValue("rating", trip.getRating());
        map.addValue("description", trip.getDescription());
        map.addValue("highlights", trip.getDescription());
        map.addValue("image", trip.getImage());
        jdbcTemplate.update(tripQueries.getAddTrip(),
                map);
    }

    @Override
    public void updateAvailableSeats(String tripId, int number) {
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("id", tripId);
        map.addValue("number", number);
        jdbcTemplate.update(tripQueries.getUpdateAvailableSeats(), map);
    }

    @Override
    public void editTripById(Trip trip) {
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("country", trip.getCountry());
        map.addValue("title", trip.getTitle());
        map.addValue("price", trip.getPrice());
        map.addValue("duration", trip.getDuration());
        map.addValue("date", trip.getDepartureDate());
        map.addValue("highlights", trip.getHighlights());
        map.addValue("dayOne", trip.getDayOne());
        map.addValue("dayTwo", trip.getDayTwo());
        map.addValue("dayThree", trip.getDayThree());
        map.addValue("dayFour", trip.getDayFour());
        map.addValue("dayFive", trip.getDayFive());
        map.addValue("daySix", trip.getDaySix());
        map.addValue("dateOne", trip.getDateOne());
        map.addValue("dateTwo", trip.getDateTwo());
        map.addValue("dateThree", trip.getDateThree());
        map.addValue("dateFour", trip.getDateFour());
        map.addValue("dateFive", trip.getDateFive());
        map.addValue("dateSix", trip.getDateSix());
        map.addValue("titleOne", trip.getTitleOne());
        map.addValue("titleTwo", trip.getTitleTwo());
        map.addValue("titleThree", trip.getTitleThree());
        map.addValue("titleFour", trip.getTitleFour());
        map.addValue("titleFive", trip.getTitleFive());
        map.addValue("titleSix", trip.getTitleSix());
        map.addValue("id", trip.getId());
        jdbcTemplate.update(tripQueries.getEditTrip(), map);
    }

    @Override
    public List<TripDto> findSelectedTrips(List<String> regions, List<String> categories, String sortBy, boolean ascending) {
        String selectAll = tripQueries.getSelectAll();
        StringBuilder sb = new StringBuilder();
        if (!isNullOrEmpty(regions) || !isNullOrEmpty(categories)) {
            sb.append(" where ");
            if (isNullOrEmpty(categories)) {
                sb.append(queryBuilder.addRegions(regions));
            } else if (isNullOrEmpty(regions)) {
                sb.append(queryBuilder.addCategories(categories));
            } else {
                sb.append(queryBuilder.addCategories(categories));
                sb.append(" and ");
                sb.append(queryBuilder.addRegions(regions));
            }
        }

        sb.append(" order by ");
        sb.append(sortBy);
        if (ascending) {
            sb.append(" asc ");
        } else {
            sb.append(" desc ");
        }

        selectAll += sb.toString();
        return jdbcTemplate.query(selectAll, new TripMapper());
    }

    private boolean isNullOrEmpty(List<String> list) {
        return list == null || list.isEmpty();
    }

}
