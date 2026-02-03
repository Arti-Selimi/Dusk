package com.dusk.controller;import java.util.List;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.dusk.dtos.MembershipInput;
import com.dusk.dtos.MembershipResponse;
import com.dusk.service.MembershipsService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class MembershipController {
  private final MembershipsService membershipsService;

  @QueryMapping
  public MembershipResponse membership(@Argument Long id) {
    return membershipsService.getMembershipById(id);
  }

  @QueryMapping
  public List<MembershipResponse> membershipByUser(@Argument Long userId) {
    return membershipsService.getMembershipsByUserId(userId);
  }

  @MutationMapping
  public MembershipResponse createMembership(@Argument MembershipInput membershipDetails) {
    return membershipsService.createMemberships(membershipDetails);
  }

  @MutationMapping
  public MembershipResponse updateMembership(@Argument MembershipInput membershipDetails) {
    return membershipsService.updateMemberships(membershipDetails);
  }

  @MutationMapping
  public MembershipResponse deActivateMembership(@Argument Long id) {
    return membershipsService.deActivate(id);
  }

}
