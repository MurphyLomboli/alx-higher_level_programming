#!/bin/bash
# A Bash script that takes in a URL and sends a request to that URL
curl -so /dev/null -w '%{size_download}\n' "$1"
