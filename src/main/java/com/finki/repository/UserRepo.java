package com.finki.repository;

import com.finki.domain.User;

import java.util.List;

public interface UserRepo {

    void addUser(User user);

    List<User> findAll();

    User findByUsername(String email);

    void addAuthority(String username);

    void editAdditionalInfo(String tripCompanion, String entertainment, String destination, String tripLength, String username);
}
