package com.w2a.cucumber;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Tester {

	@Given("^I am a \"([^\"]*)\" Tester$")
	public void I_am_a_Manual_Tester(String testerType, DataTable table) {
		List<Map<String,String>> data = table.asMaps();
		
		System.out.println("---------------------------------");
		System.out.println("@Given -- I am a " + testerType + " Tester "+ " Current Location is " + data.get(0).get("Location") + " Position " + data.get(0).get("Position"));
		System.out.println("@Given -- I am a " + testerType + " Tester "+ " Current Location is " + data.get(1).get("Location") + " Position " + data.get(1).get("Position"));
		}

	@When("^I apply for a Job$")
	public void I_apply_for_a_Job() {
		System.out.println("@When -- I apply for a Job");
	}
	
	@Then("^I got a \"([a-zA-z]{1,})\" paid job$")
	public void I_got_a_less_paid_job(String jobType) {
		System.out.println("@Then -- I got a " + jobType + " paid job");
	}
	
	@And("^I am \"([^\"]*)\" satisfied with my salary$")
	public void I_am_not_satisfied_with_my_salary(String satisfactionType) {
		System.out.println("@And -- I am "+ satisfactionType + " satisfied with my salary");
	}
	
	@But("^My parents are \"([^\"]*)\" satisfied$")
	public void My_parents_are_still_satisfied(String parentsSatisfaction) {
		System.out.println("@But -- My parents are " + parentsSatisfaction +" satisfied");
	}
	
}
