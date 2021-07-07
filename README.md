# GCP Event-Driven Microservices

## Create
```bash
gcloud pubsub topics create order-placed
gcloud pubsub subscriptions create update-inventory --topic order-placed
gcloud pubsub subscriptions create schedule-delivery --topic order-placed


```

## Clean up
```bash
gcloud pubsub subscriptions delete update-inventory
gcloud pubsub subscriptions delete schedule-delivery
gcloud pubsub topics delete order-placed

gcloud functions delete helloGET
```


## Test
Execute
```bash
curl --location --request POST 'https://orders-ek4m5l6asq-uk.a.run.app/orders' \
--header 'Content-Type: application/json' \
--data-raw '{
    "total": 1000,
    "products": [
        1,
        2,
        3
    ]
}'
```
