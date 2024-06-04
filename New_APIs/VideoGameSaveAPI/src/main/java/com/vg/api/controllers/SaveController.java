package com.vg.api.controllers;

import java.util.List;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vg.api.dto.EmailRequestDTO;
import com.vg.api.dto.UpdateDTO;
import com.vg.api.model.UserSavedata;
import com.vg.api.repo.SaveRepository;

@RestController
public class SaveController {
	final SaveRepository sr;
	final MongoTemplate mt;
	SaveController(SaveRepository saveRepo, MongoTemplate mongoTemplate){
		this.mt = mongoTemplate;
		this.sr = saveRepo;
	}

	@GetMapping("/api/v1/saves")
	public ResponseEntity<List<UserSavedata>> getSave(){
		return ResponseEntity.ok(sr.findAll());
	}
	
	@GetMapping("/api/v1/save")
	public ResponseEntity<UserSavedata> getOneSave(@RequestBody EmailRequestDTO requestDTO){
		UserSavedata us = sr.findByUserEmail(requestDTO.getUserEmail());
		if(us!=null) {
			return ResponseEntity.ok(us);
		}
		throw new RuntimeException("User does'nt exists.");
	}
	
	@PostMapping("/api/v1/save")
	public ResponseEntity<Boolean> saveData(@RequestBody UserSavedata us){
		if(sr.findByUserEmail(us.getUserEmail())==null) {
			sr.save(us);
			return ResponseEntity.ok(true);
		}
		throw new RuntimeException("User already exists.");
	}
	
	@PutMapping("/api/v1/save")
	public ResponseEntity<Boolean> updateSavedata(@RequestBody UpdateDTO emailAndSavedata){	
		UserSavedata fetchedUserSave = sr.findByUserEmail(emailAndSavedata.getUserEmail());

		if(fetchedUserSave!=null) {
			fetchedUserSave.setSaveData(emailAndSavedata.getSaveData());
			sr.save(fetchedUserSave);
			return ResponseEntity.ok(true);
		}
		throw new RuntimeException("User could not be found.");
	}
	
	@DeleteMapping("/api/v1/save")
	public ResponseEntity<Boolean> deleteSavedata(@RequestBody EmailRequestDTO deleteDTO){
		UserSavedata us = sr.findByUserEmail(deleteDTO.getUserEmail());
		if(us!=null) {
			sr.delete(us);
			return ResponseEntity.ok(true);
		}
		throw new RuntimeException("User could not be found.");
	}
	
	
	
}
