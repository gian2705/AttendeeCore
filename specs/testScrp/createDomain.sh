curl -X POST http://localhost:5000/domain -H 'Content-Type:application/json' -d '{"name":"Order", "parent": "BaseDomain", "fields": [{"type":"String", "name":"fullName", "default": null, "meta": null}, {"type":"Int", "name":"age", "default": 0, "meta": "Indexed()"}]}'