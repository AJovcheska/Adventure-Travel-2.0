package com.finki.mapper;

import com.finki.domain.TripDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TripMapper implements RowMapper<TripDto> {

    @Override
    public TripDto mapRow(ResultSet resultSet, int i) throws SQLException {
        TripDto trip = new TripDto();
        trip.setId(resultSet.getLong("id"));
        trip.setCategory(resultSet.getString("category"));
        trip.setRegion(resultSet.getString("region"));
        trip.setCountry(resultSet.getString("country"));
        trip.setTitle(resultSet.getString("title"));
        trip.setRating(resultSet.getInt("rating"));
        trip.setTags(resultSet.getString("tags"));
        trip.setPrice(resultSet.getBigDecimal("price"));
        trip.setDepartureDate(resultSet.getString("departure_date"));
        trip.setEndDateToSign(resultSet.getDate("end_date_to_sign"));
        trip.setDestination(resultSet.getString("destination"));
        trip.setDuration(resultSet.getInt("duration"));
        trip.setDescription(resultSet.getString("description"));
        trip.setHighlights(resultSet.getString("highlights"));
        trip.setImage(resultSet.getString("image"));
        trip.setAvailableSeats(resultSet.getInt("availableSeats"));

        trip.setImageOne(resultSet.getString("imageOne"));
        trip.setImageTwo(resultSet.getString("imageTwo"));
        trip.setImageThree(resultSet.getString("imageThree"));
        trip.setImageFour(resultSet.getString("imageFour"));
        trip.setImageFive(resultSet.getString("imageFive"));
        trip.setImageSix(resultSet.getString("imageSix"));

        trip.setDayOne(resultSet.getString("dayOne"));
        trip.setDayTwo(resultSet.getString("dayTwo"));
        trip.setDayThree(resultSet.getString("dayThree"));
        trip.setDayFour(resultSet.getString("dayFour"));
        trip.setDayFive(resultSet.getString("dayFive"));
        trip.setDaySix(resultSet.getString("daySix"));

        trip.setDateOne(resultSet.getString("dateOne"));
        trip.setDateTwo(resultSet.getString("dateTwo"));
        trip.setDateThree(resultSet.getString("dateThree"));
        trip.setDateFour(resultSet.getString("dateFour"));
        trip.setDateFive(resultSet.getString("dateFive"));
        trip.setDateSix(resultSet.getString("dateSix"));

        trip.setTitleOne(resultSet.getString("titleOne"));
        trip.setTitleTwo(resultSet.getString("titleTwo"));
        trip.setTitleThree(resultSet.getString("titleThree"));
        trip.setTitleFour(resultSet.getString("titleFour"));
        trip.setTitleFive(resultSet.getString("titleFive"));
        trip.setTitleSix(resultSet.getString("titleSix"));

        return trip;
    }
}
