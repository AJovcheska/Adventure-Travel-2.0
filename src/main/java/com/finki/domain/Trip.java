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
