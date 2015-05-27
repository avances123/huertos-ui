/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('SessionService', () => {
  let service;
  let httpBackend;
  let authRequestHandler;

  beforeEach(module('huertos'));

  beforeEach(inject((SessionService,$httpBackend) => {
    service = SessionService;
    httpBackend = $httpBackend;
    authRequestHandler = httpBackend.when('POST', 'http://localhost:8000/auth/register/',{'username':'avances123','password':'12345'})
                            .respond({"token":"kakota"});
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should equal SessionService', () => {
    expect(service.get()).toEqual('SessionService');
  });

  it('should fetch jwt token', () => {
      httpBackend.expectPOST('http://localhost:8000/auth/register/',{'username':'avances123','password':'12345'});
      service.register("avances123","12345").success((data) =>{
        expect(data.token).toBeDefined();
        expect(data.token).toBe("kakota");
      });
      httpBackend.flush();

   });
});
