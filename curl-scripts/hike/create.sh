API="http://localhost:4741"
URL_PATH="/hikes"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "hike": {
      "parkName": "'"${PARK}"'",
      "location": "'"${LOC}"'",
      "distance": "'"${DIST}"'",
      "difficulty": "'"${DIFF}"'"
    }
  }'


echo
