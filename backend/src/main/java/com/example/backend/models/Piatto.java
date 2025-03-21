package com.example.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "piatti")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Piatto{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true) // Nome del piatto
    private String nome; 

    @Column(nullable = false) // Prezzo del piatto
    private double prezzo;

    @Column(nullable = false) // Descrizione del piatto
    private String descrizione;
}