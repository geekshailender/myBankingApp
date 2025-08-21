package com.learning.geek.bankingbackend.controller;

import com.learning.geek.bankingbackend.model.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bankingapi")
public class BankingAPIService {

    UserDetails userDetails;

    @GetMapping("{userId}")
    public UserDetails getUserDetails(String userId) {
        return userDetails;
    }

    @PostMapping
    public String createUserDetails(@RequestBody UserDetails userDetails) {
        this.userDetails = userDetails;
        return "User created successfully";
    }

    @PutMapping
    public String updateUserDetails(@RequestBody UserDetails userDetails) {
        this.userDetails = userDetails;
        return "User updated successfully";
    }

    @DeleteMapping("{userId}")
    public String deleteUserDetails(String userId) {
        this.userDetails = null;
        return "User Deleted successfully";
    }
}
