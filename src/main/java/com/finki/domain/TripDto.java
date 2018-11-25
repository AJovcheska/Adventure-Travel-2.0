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

    private Integer availableSeats;

    private String dayOne;
    private String dayTwo;
    private String dayThree;
    private String dayFour;
    private String dayFive;
    private String daySix;

    private String imageOne;
    private String imageTwo;
    private String imageThree;
    private String imageFour;
    private String imageFive;
    private String imageSix;

    private String dateOne;
    private String dateTwo;
    private String dateThree;
    private String dateFour;
    private String dateFive;
    private String dateSix;

    private String titleOne;
    private String titleTwo;
    private String titleThree;
    private String titleFour;
    private String titleFive;
    private String titleSix;
}
