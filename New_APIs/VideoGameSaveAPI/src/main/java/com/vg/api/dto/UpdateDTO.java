package com.vg.api.dto;

public class UpdateDTO {
	private String userEmail;
	private Object saveData;
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
