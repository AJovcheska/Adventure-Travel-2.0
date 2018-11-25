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
        trip.setAvailableSeats(tripDto.getAvailableSeats());

        trip.setImageOne(tripDto.getImageOne());
        trip.setImageTwo(tripDto.getImageTwo());
        trip.setImageThree(tripDto.getImageThree());
        trip.setImageFour(tripDto.getImageFour());
        trip.setImageFive(tripDto.getImageFive());
        trip.setImageSix(tripDto.getImageSix());

        trip.setTitleOne(tripDto.getTitleOne());
        trip.setTitleTwo(tripDto.getTitleTwo());
        trip.setTitleThree(tripDto.getTitleThree());
        trip.setTitleFour(tripDto.getTitleFour());
        trip.setTitleFive(tripDto.getTitleFive());
        trip.setTitleSix(tripDto.getTitleSix());

        trip.setDayOne(tripDto.getDayOne());
        trip.setDayTwo(tripDto.getDayTwo());
        trip.setDayThree(tripDto.getDayThree());
        trip.setDayFour(tripDto.getDayFour());
        trip.setDayFive(tripDto.getDayFive());
        trip.setDaySix(tripDto.getDaySix());

        trip.setDateOne(tripDto.getDateOne());
        trip.setDateTwo(tripDto.getDateTwo());
        trip.setDateThree(tripDto.getDateThree());
        trip.setDateFour(tripDto.getDateFour());
        trip.setDateFive(tripDto.getDateFive());
        trip.setDateSix(tripDto.getDateSix());
        return trip;
    }
}
