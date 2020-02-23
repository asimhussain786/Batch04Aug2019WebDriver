package com.w2a.cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Developer {
	
	@Given("^I am a \"([a-zA-z]{1,})\" Developer$") 
	public void I_am_a_CoreJava_Developer(String developerType) {
		System.out.println("------------------------------------");
		System.out.println("@Given -- I am a "+ developerType +" developer");
	}

	@When("^I started development$")
	public void I_started_development() {
	System.out.println("@When -- I started development");	
	}
	
	@Then("^I created a \"([a-zA-Z]{1,})\" java program$")
	public void I_created_a_simple_java_program(String programType) {
		System.out.println("I created a "+programType +" java program");
	}
	@And("^I am \"([a-zA-Z]{1,})\" experienced$")
	public void I_am_not_experienced(String experience) {
		System.out.println("I am "+ experience +" experienced");
	}
	
	@But("^My Boss is \"([a-zA-Z]{1,})\" satisfied$")
	public void My_Boss_is_highly_satisfied(String satisfactionType) {
	System.out.println("My Boss is "+satisfactionType+" satisfied");
		
	}
	
}
