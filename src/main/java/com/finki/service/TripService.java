package com.finki.service;

import com.finki.domain.Trip;
import com.finki.domain.TripDto;
import com.finki.mapper.TripDtoToTripMapper;
import com.finki.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TripService {

    @Autowired
    private TripRepository tripRepository;

    public List<Trip> getAll() {
        return mapTripDtoListToTripList(tripRepository.findAll());
    }

    public List<Trip> getByCategory(String category) {
        return mapTripDtoListToTripList(tripRepository.findByCategory(category));
    }

    public List<Trip> getByRegion(String region) {
        return mapTripDtoListToTripList(tripRepository.findByRegion(region));
    }

    public List<Trip> findTripsForUser(String user) {
        return mapTripDtoListToTripList(tripRepository.findTripsForUser(user));
    }

    public Trip getTripById(String id) {
        return TripDtoToTripMapper.mapDtoToTrip(tripRepository.findById(id));
    }

    private List<Trip> mapTripDtoListToTripList(List<TripDto> tripDtos) {
        List<Trip> trips = new ArrayList<>();
        for (TripDto tripDto : tripDtos) {
            trips.add(TripDtoToTripMapper.mapDtoToTrip(tripDto));
        }
        return trips;
    }

    public List<Trip> getSelectedTrips(List<String> regions, List<String> categories, String sortBy, boolean ascending, String destination) {
        List<Trip> allTrips = mapTripDtoListToTripList(tripRepository.findSelectedTrips(regions, categories, sortBy, ascending));
        if (destination != null && !destination.isEmpty()) {
            List<Trip> sameAsDestination = new ArrayList<>();
            List<Trip> toReturn = new ArrayList<>();
            for (Trip tripDto : allTrips) {
                if (tripDto.getDestination().equals(destination)) {
                    sameAsDestination.add(tripDto);
                }
            }
            allTrips.removeAll(sameAsDestination);

            toReturn.addAll(sameAsDestination);
            toReturn.addAll(allTrips);
            return toReturn;

        }
        return allTrips;
    }

    public List<Trip> getByTag(String tag) {
        List<Trip> trips = mapTripDtoListToTripList(tripRepository.findAll());

        List<Trip> tripsByTag = new ArrayList<>();
        for (Trip trip : trips) {
            if (trip.getTags().contains(tag)) {
                tripsByTag.add(trip);
            }
        }
        return tripsByTag;
    }

    public void deleteTripFromUser(String username, String id) {
        tripRepository.deleteTripFromUser(username, id);
    }

    public void addTripForUser(String username, String id) { tripRepository.addTripForUser(username, id); }

    public void addTrip(Trip trip) { tripRepository.addTrip(trip); }

}
