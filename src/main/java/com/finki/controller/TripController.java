package com.finki.controller;

import com.finki.domain.Trip;
import com.finki.service.TripService;
import com.finki.util.PreferenceCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping
public class TripController {

    @Autowired
    private TripService tripService;

    @Autowired
    private PreferenceCalculator preferenceCalculator;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public String sayHello() {
        return "Hello User!";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/trips")
    @ResponseBody
    public ResponseEntity<List<Trip>> getTrips() {
        return ResponseEntity.ok(tripService.getAll());
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/trips/category/{category}")
    public ResponseEntity<List<Trip>> getTripsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(tripService.getByCategory(category));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/trips/region/{region}")
    public ResponseEntity<List<Trip>> getTripsByRegion(@PathVariable String region) {
        return ResponseEntity.ok(tripService.getByRegion(region));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/trips/id")
    public ResponseEntity<Trip> getTripById(@RequestParam String id) {
        return ResponseEntity.ok(tripService.getTripById(id));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/trips/selected", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Trip>> getSelectedTrips(@RequestParam(required = false) List<String> region,
                                                       @RequestParam(required = false) List<String> category,
                                                       @RequestParam String sortBy,
                                                       @RequestParam boolean ascending) {
        return ResponseEntity.ok(tripService.getSelectedTrips(region, category, sortBy, ascending));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/secure/trips/{username}")
    public ResponseEntity<List<Trip>> getTripsForUser(@PathVariable String username) {
        List<Trip> tripsForUser = tripService.findTripsForUser(username);
        return ResponseEntity.ok(preferenceCalculator.orderTripsByPreferences(username, tripsForUser));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/trips/{username}")
    public ResponseEntity<List<Trip>> getTripsUser(@PathVariable String username) {
        List<Trip> tripsForUser = tripService.findTripsForUser(username);
        return ResponseEntity.ok(tripsForUser);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/trips/tag")
    public ResponseEntity<List<Trip>> getTripsByTag(@RequestParam String tag) {
        return ResponseEntity.ok(tripService.getByTag(tag));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.DELETE, value = "/nonsecured/remove/trip", consumes = MediaType.ALL_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> deleteTripFromUser(@RequestParam(value = "username") String username, @RequestParam(value = "id") String id) {
        tripService.deleteTripFromUser(username, id);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
