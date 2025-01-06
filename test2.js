const request = require('supertest');
const express = require('express');
const app = require('../index');

beforeEach(() => {
    products = [
        { id: 1, name: 'Laptop', price: 1000.0 },
        { id: 2, name: 'Smartphone', price: 800.0 }
    ];