package com.vg.api.model;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

//Add your own collection name
@Document(collection="UserSavedata")
public class UserSavedata {
	private ObjectId id;
	private String username;
	private String userEmail;
	private Object saveData;
	UserSavedata(ObjectId id, String username, String userEmail, Object saveData){
		this.id = id;
		this.username = username;
		this.userEmail = userEmail;
		this.saveData = saveData;
	}
	
	public ObjectId getId() {
		return id;
	}
	public void setId(ObjectId id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public Object getSaveData() {
		return saveData;
	}
	public void setSaveData(Object saveData) {
		this.saveData = saveData;
	}
	
}
