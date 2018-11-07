package com.finki.repository;

import com.finki.domain.User;
import com.finki.mapper.UserMapper;
import com.finki.queries.UserQueries;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepo {

    private UserQueries userQueries;
    private NamedParameterJdbcTemplate jdbcTemplate;

    @Autowired
    public UserRepositoryImpl(UserQueries userQueries, NamedParameterJdbcTemplate jdbcTemplate) {
        this.userQueries = userQueries;
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void addUser(User user) {
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("username", user.getUsername());
        map.addValue("name", user.getName());
        map.addValue("age", user.getAge());
        map.addValue("password", user.getPassword());
        map.addValue("country", user.getCountry());
        map.addValue("email", user.getEmail());
        map.addValue("sex", user.getSex());
        map.addValue("profession", user.getProfession());
        map.addValue("activated", true);
        jdbcTemplate.update(userQueries.getAddUser(), map);
    }

    @Override
    public List<User> findAll() {
        return jdbcTemplate.query(userQueries.getSelectAll(), new UserMapper());
    }

    @Override
    public User findByUsername(String username) {
        List<User> list = jdbcTemplate.query(userQueries.getSelectByUsername(),
                new MapSqlParameterSource("username", username), new UserMapper());
        if (list.size() != 1) {
            return null;
        }
        return list.get(0);
    }

    @Override
    public void addAuthority(String username) {
        MapSqlParameterSource map = new MapSqlParameterSource();
        map.addValue("username", username);
        jdbcTemplate.update(userQueries.getAddUser(), map);
    }

    @Override
    public void editAdditionalInfo(String tripCompanion, String entertainment, String destination, String tripLength, String username) {
        String baseQuery = "update user set ";
        MapSqlParameterSource map = new MapSqlParameterSource();
        if (tripCompanion != null) {
            baseQuery += "trip_companion=:trip_companion";
            if (entertainment != null || destination != null || tripLength != null) {
                baseQuery += ", ";
            }
            map.addValue("trip_companion", tripCompanion);

        }
        if (entertainment != null) {
            baseQuery += "entertainment=:entertainment";
            if (destination != null || tripLength != null) {
                baseQuery += ", ";
            }
            map.addValue("entertainment", entertainment);

        }
        if (tripLength != null) {
            baseQuery += "trip_length=:trip_length";
            if (destination != null) {
                baseQuery += ", ";
            }
            map.addValue("trip_length", tripLength);

        }
        if (destination != null) {
            baseQuery += "destination=:destination ";
            map.addValue("destination", destination);

        }
        baseQuery += " where username=:username";
        map.addValue("username", username);
        jdbcTemplate.update(baseQuery, map);
    }
}
