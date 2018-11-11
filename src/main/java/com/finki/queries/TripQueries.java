package com.finki.queries;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Getter
@Component
@PropertySource("classpath:trip-queries.properties")
public class TripQueries {

    @Value("${select-all-trips}")
    private String selectAll;

    @Value("${select-by-region}")
    private String selectByRegion;

    @Value("${select-by-category}")
    private String selectByCategory;

    @Value("${select-by-id}")
    private String selectById;

    @Value("${select-trips-for-user}")
    private String selectTripsForUser;

    @Value("${delete-trip-from-user}")
    private String deleteTripFromUser;

    @Value("${add-trip-for-user}")
    private String addTripForUser;

}


