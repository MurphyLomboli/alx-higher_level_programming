#!/bin/bash
# Sends a request to a URL and displays only the HTTP status code
curl -sIS "$1" | grep -oP "^HTTP\/\d\.\d \K\d+"
