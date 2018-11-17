package com.finki.domain;

import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
public class TripDto {

    private Long id;

    private String category;

    private String region;

    private String country;

    private String title;

    private BigDecimal price;

    private Integer rating;

    private String tags;

    private String departureDate;

    private Date endDateToSign;

    private String destination;

    private Integer duration;

    private String description;

    private String highlights;

    private String image;
}
