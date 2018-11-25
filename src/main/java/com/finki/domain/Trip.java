package com.finki.domain;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
public class Trip {

    private Long id;

    private Category category;

    private String region;

    private String country;

    private String title;

    private BigDecimal price;

    private String tags;

    private Integer rating;

    private String departureDate;

    private Date endDateToSign;

    private String destination;

    private Integer duration;

    private String description;

    private String highlights;

    private String image;

    private Integer availableSeats;
}
