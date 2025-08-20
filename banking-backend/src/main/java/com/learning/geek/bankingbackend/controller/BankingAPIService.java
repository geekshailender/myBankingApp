package com.learning.geek.bankingbackend.controller;

import com.learning.geek.bankingbackend.model.userDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bankingapi")
public class BankingAPIService {
    @GetMapping("{userId}")
    public userDetails getUserDetails(String userId) {
        return new userDetails("Sh", "Sing", "ss@gmil.com",
                "90423", "Dev");
    }
}
