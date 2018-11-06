package com.finki.controller;

import com.finki.domain.User;
import com.finki.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping()
public class UserController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/secure")
    public String sayHello() {
        return "Secure Hello!";
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/secure/{username}")
    public User getUserByUsername(@PathVariable String username) {
        return userService.findByUsername(username);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/nonsecured/users/register")
    public ResponseEntity registerUser(@RequestBody User user) {
        userService.addUser(user);
        userService.addAuthority(user.getUsername());
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/nonsecured/users")
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok(userService.findAll());
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/secure/users/{username}")
    public ResponseEntity<User> findByUsername(@PathVariable String username) {
        return ResponseEntity.ok(userService.findByUsername(username));
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.GET, value = "/secure/users/login")
    public ResponseEntity<Boolean> checkIfUserExists(@RequestParam String username,
                                                     @RequestParam String password) {
        User user = userService.findByUsername(username);
        if (user != null && password.equals(user.getPassword())) {
            return ResponseEntity.ok(true);
        }
        return ResponseEntity.ok(false);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.PUT, value = "/nonsecured/update")
    public ResponseEntity updateAdditionalInfo(@RequestBody User user) {
        userService.updateAdditionalInfo(user.getTripCompanion(), user.getEntertainment(), user.getDestination(), user.getTripLength(), user.getUsername());
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
