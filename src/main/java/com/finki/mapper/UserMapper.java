package com.finki.mapper;

import com.finki.domain.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {
        User user = new User();
        user.setUsername(resultSet.getString("username"));
        user.setEmail(resultSet.getString("email"));
        user.setName(resultSet.getString("name"));
        user.setAge(resultSet.getInt("age"));
        user.setPassword(resultSet.getString("password"));
        user.setCountry(resultSet.getString("country"));
        user.setSex(resultSet.getString("sex"));
        user.setProfession(resultSet.getString("profession"));
        user.setDestination(resultSet.getString("destination"));
        user.setTripLength(resultSet.getString("trip_length"));
        user.setTripCompanion(resultSet.getString("trip_companion"));
        user.setEntertainment(resultSet.getString("entertainment"));
        user.setActivated(resultSet.getBoolean("activated"));
        return user;
    }
}
