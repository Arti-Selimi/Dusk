package com.dusk.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.dusk.repository.MembershipsRepository;
import com.dusk.repository.UserRepository;

import jakarta.transaction.Transactional;

import com.dusk.model.Memberships;
import com.dusk.model.User;
import com.dusk.dtos.MembershipInput;
import com.dusk.dtos.MembershipResponse;
import com.dusk.mapper.MembershipsMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MembershipsService {
  private final MembershipsRepository membershipsRepository;
  private final UserRepository userRepository;
  private final MembershipsMapper membershipMapper;

  public List<MembershipResponse> getMembershipsByUserId(Long userId) {
    List<Memberships> memberships = membershipsRepository.findByUser_Id(userId);
    return memberships.stream()
        .map(membershipMapper::toResponse)
        .collect(Collectors.toList());
  }

  public MembershipResponse getMembershipById(Long id) {
    Memberships membership = membershipsRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Membership not found"));

    return membershipMapper.toResponse(membership);
  }

  public MembershipResponse createMemberships(MembershipInput membershipDetails) {
    User user = userRepository.findById(membershipDetails.userId())
        .orElseThrow(() -> new RuntimeException("User not found"));

    Memberships membership = Memberships.builder()
        .user(user)
        .name(membershipDetails.name())
        .membershipType(membershipDetails.type())
        .startDate(LocalDateTime.now())
        .build();

    Memberships savedMembership = membershipsRepository.save(membership);

    return membershipMapper.toResponse(savedMembership);
  }

  public MembershipResponse updateMemberships(MembershipInput membershipDetails) {
    Memberships membership = membershipsRepository.findById(membershipDetails.id())
        .orElseThrow(() -> new RuntimeException("Membership not found"));

    membershipMapper.updateMembershipFromInput(membershipDetails, membership);

    Memberships updatedMembership = membershipsRepository.save(membership);
    return membershipMapper.toResponse(updatedMembership);
  }

  @Transactional
  public MembershipResponse deActivate(Long id) {
    Memberships membership = membershipsRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Membership not found"));

    membership.setActive(false);
    return membershipMapper.toResponse(membership);
  }
}
