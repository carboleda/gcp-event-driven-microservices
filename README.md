# GCP Event-Driven Microservices

## Setup
```bash
gcloud config set project PROJECT_ID
gcloud config set run/region us-east4
gcloud config list

# Reaplce PROJECT_ID by your project id on services/orders/package.json
"scripts": {
    "image:build": "gcloud builds submit --tag gcr.io/PROJECT_ID/orders",
    "image:deploy": "gcloud run deploy --region us-east4 --image gcr.io/PROJECT_ID/orders"
}
```

## Create
```bash
gcloud pubsub topics create order-placed
gcloud pubsub subscriptions create update-inventory --topic order-placed
gcloud pubsub subscriptions create schedule-delivery --topic order-placed
```

## Clean up
```bash
gcloud projects delete PROJECT_ID

or

gcloud pubsub subscriptions delete update-inventory
gcloud pubsub subscriptions delete schedule-delivery
gcloud pubsub topics delete order-placed

gcloud functions delete updateInventory
gcloud functions delete scheduleDelivery
```


## Test
Execute the following command using the terminal on Linux or Mac
```bash
curl --location --request POST 'https://orders-ek4m5l6asq-uk.a.run.app/orders' \
--header 'Content-Type: application/json' \
--data-raw '{
    "total": 1000,
    "date": "2021-07-31",
    "products": [
        1,
        2,
        3
    ]
}'
```
