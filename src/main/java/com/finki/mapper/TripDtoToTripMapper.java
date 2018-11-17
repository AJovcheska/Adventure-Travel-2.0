package com.finki.mapper;


import com.finki.domain.Category;
import com.finki.domain.Trip;
import com.finki.domain.TripDto;

public final class TripDtoToTripMapper {

    public static Trip mapDtoToTrip(TripDto tripDto) {
        Trip trip = new Trip();
        trip.setId(tripDto.getId());
        trip.setCategory(Category.valueOf(tripDto.getCategory()));
        trip.setRegion(tripDto.getRegion());
        trip.setCountry(tripDto.getCountry());
        trip.setTitle(tripDto.getTitle());
        trip.setRating(tripDto.getRating());
        trip.setTags(tripDto.getTags());
        trip.setDepartureDate(tripDto.getDepartureDate());
        trip.setEndDateToSign(tripDto.getEndDateToSign());
        trip.setPrice(tripDto.getPrice());
        trip.setDestination(tripDto.getDestination());
        trip.setDuration(tripDto.getDuration());
        trip.setDescription(tripDto.getDescription());
        trip.setHighlights(tripDto.getHighlights());
        trip.setImage(tripDto.getImage());
        return trip;
    }
}
