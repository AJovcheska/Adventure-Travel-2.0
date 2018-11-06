package com.finki.service;

import com.finki.domain.User;
import com.finki.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;


@Component("userService")
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public void addUser(User user) {
        userRepo.addUser(user);
    }

    public void addAuthority(String username) {
        userRepo.addAuthority(username);
    }

    public List<User> findAll() {
        return userRepo.findAll();
    }

    public User findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public void updateAdditionalInfo(String tripCompanion, String entertainment, String destination, String tripLength, String username) {
        userRepo.editAdditionalInfo(tripCompanion, entertainment, destination, tripLength, username);
    }
}
