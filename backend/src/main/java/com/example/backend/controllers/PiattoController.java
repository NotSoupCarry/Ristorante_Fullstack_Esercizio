package com.example.backend.controllers;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.backend.models.Piatto;
import com.example.backend.services.PiattoService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@Controller
@RequestMapping("/piatti")
@RequiredArgsConstructor
public class PiattoController {
    
    private final PiattoService piattoService;

    @GetMapping
   public List<Piatto> findAll() {
       return piattoService.findAll();
   }

   @PostMapping
   public void save(@RequestBody Piatto piatto) {
       piattoService.save(piatto);
   }
    
   @DeleteMapping("/{id}")
    public void deleteById(@RequestParam Long id) {
         piattoService.deleteById(id);
    }

}
