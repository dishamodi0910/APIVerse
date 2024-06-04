package com.vg.api.repo;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.vg.api.model.UserSavedata;


public interface SaveRepository extends MongoRepository<UserSavedata, ObjectId> {
	UserSavedata findByUserEmail(String userEmail);
}