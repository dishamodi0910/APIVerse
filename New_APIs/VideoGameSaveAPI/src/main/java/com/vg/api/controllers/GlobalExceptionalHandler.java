package com.vg.api.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionalHandler {
	@ExceptionHandler({RuntimeException.class})
	public ResponseEntity<Object> handleRuntimeException(RuntimeException e){
		return ResponseEntity.internalServerError().body(e.getLocalizedMessage());
	}
}
