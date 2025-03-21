package com.example.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.models.Piatto;
import com.example.backend.repositories.PiattoRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PiattoService {
    private final PiattoRepository piattoRepository;

    public List<Piatto> findAll() {
        return piattoRepository.findAll();
    }

    @Transactional
    public Piatto save(Piatto piatto) {
        return piattoRepository.save(piatto);
    }

    @Transactional
    public void deleteById(Long id) {
        if (!piattoRepository.existsById(id)) {
            throw new IllegalArgumentException("Piatto con id " + id + " non trovato");
        }
        piattoRepository.deleteById(id);
    }
}
