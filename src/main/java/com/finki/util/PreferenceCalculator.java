package com.finki.util;

import com.finki.domain.Trip;
import com.finki.domain.User;
import com.finki.service.UserService;
import lombok.Singular;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class PreferenceCalculator {

    @Autowired
    private UserService userService;

    public List<Trip> orderTripsByPreferences(String username, List<Trip> trips) {
        User byUsername = userService.findByUsername(username);
        String preferredDestination = byUsername.getDestination();
        if (preferredDestination == null || preferredDestination.isEmpty()) {
            return trips;
        } else {
            Map<String, List<Trip>> sortedMap = new HashMap<>();
            for (Trip trip : trips) {
                String destination = trip.getDestination();
                if (sortedMap.containsKey(destination)) {
                    List<Trip> trips1 = sortedMap.get(destination);
                    trips1.add(trip);
                } else {
                    List<Trip> newList = new ArrayList<>();
                    newList.add(trip);
                    sortedMap.put(destination, newList);
                }
            }

            List<Trip> trips1 = sortedMap.get(preferredDestination);
            List<Trip> listToReturn = new ArrayList<>();
            listToReturn.addAll(trips1);
            sortedMap.remove(preferredDestination);
            for (List<Trip> value : sortedMap.values()) {
                listToReturn.addAll(value);
            }
            return listToReturn;
        }
    }
}
