package com.finki.repository;

import com.finki.domain.Trip;
import com.finki.domain.TripDto;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface TripRepository {

    @Transactional(readOnly = true)
    List<TripDto> findAll();

    @Transactional(readOnly = true)
    List<TripDto> findByCategory(String category);

    @Transactional(readOnly = true)
    List<TripDto> findByRegion(String region);

    @Transactional(readOnly = true)
    TripDto findById(String title);

    @Transactional(readOnly = true)
    List<TripDto> findSelectedTrips(List<String> regions, List<String> categories, String sortBy, boolean ascending);

    @Transactional(readOnly = true)
    List<TripDto> findTripsForUser(String user);

    @Transactional(readOnly = true)
    void deleteTripFromUser(String username, String id);
    
    @Transactional(readOnly = true)
    void addTripForUser(String username, String id);

    @Transactional(readOnly = true)
    void addTrip(Trip trip);

    @Transactional(readOnly = true)
    void updateAvailableSeats(String tripId, int number);

    @Transactional(readOnly = true)
    void editTripById(Trip trip);

}
