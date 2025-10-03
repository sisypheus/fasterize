export const activities = [
  {
    "id": 1,
    "userId": 2,
    "user": {
      "id": 2,
      "name": "User 2"
    },
    "projectId": 1,
    "websiteId": 3,
    "type": "FLUSH_CACHE",
    "status": "COMPLETED",
    "subject": "CACHE",
    "description": "Cache fully purged",
    "createdAt": "2025-07-15T21:35:32Z",
    "updatedAt": "2025-07-15T21:57:32Z"
  },
  {
    "id": 2,
    "userId": 5,
    "user": {
      "id": 5,
      "name": "User 5"
    },
    "projectId": 5,
    "websiteId": 2,
    "type": "DELETE",
    "status": "FAILED",
    "subject": "DNS",
    "supportTicket": "SUP-1749",
    "description": "Failed to delete DNS record",
    "createdAt": "2025-04-19T05:23:23Z",
    "updatedAt": "2025-04-19T05:52:14Z",
    "information": {
      "type": "DNS",
      "detailsType": "deleting-dns-record",
      "payload": {
        "recordType": "TXT",
        "host": "@",
        "value": "old-verification",
        "reason": "permission-denied"
      }
    }
  },
  {
    "id": 3,
    "userId": 1,
    "user": {
      "id": 1,
      "name": "User 1"
    },
    "projectId": 3,
    "websiteId": 1,
    "type": "UPLOAD",
    "status": "IN_PROGRESS",
    "subject": "JOB",
    "description": "Artifacts upload running",
    "createdAt": "2025-05-25T07:07:57Z",
    "updatedAt": "2025-05-25T07:07:57Z",
    "requestId": "ccd79bb4-d8d2-442f-bb80-e09a4b162dd9"
  },
  {
    "id": 4,
    "userId": 6,
    "user": {
      "id": 6,
      "name": "User 6"
    },
    "projectId": 4,
    "websiteId": 1,
    "type": "INSTALL",
    "status": "COMPLETED",
    "subject": "APPLICATION",
    "applicationId": "preload",
    "description": "Preload app installed",
    "supportTicket": "SUP-5267",
    "createdAt": "2025-05-17T07:30:48Z",
    "updatedAt": "2025-05-17T08:32:14Z"
  },
  {
    "id": 5,
    "userId": 9,
    "user": {
      "id": 9,
      "name": "User 9"
    },
    "projectId": 2,
    "websiteId": 3,
    "type": "UPDATE",
    "status": "COMPLETED",
    "subject": "APPLICATION",
    "applicationId": "edge-rewriter",
    "description": "Application configuration updated",
    "createdAt": "2025-07-01T18:04:35Z",
    "updatedAt": "2025-07-01T22:05:11Z",
    "requestId": "a8e4bc23-b2cf-44f2-9b1a-bc6c3f4328e0",
    "information": {
      "type": "DIFF",
      "detailsType": "upserting-vhost",
      "diff": {
        "before": {
          "rules": [
            {
              "match": "/images/*",
              "action": "cache",
              "ttl": 3600
            },
            {
              "match": "/api/*",
              "action": "bypass"
            }
          ],
          "enabled": true,
          "version": 12
        },
        "after": {
          "rules": [
            {
              "match": "/images/*",
              "action": "cache",
              "ttl": 7200
            },
            {
              "match": "/api/*",
              "action": "bypass"
            },
            {
              "match": "/fonts/*",
              "action": "cache",
              "ttl": 86400
            }
          ],
          "enabled": true,
          "version": 13
        }
      }
    }
  },
  {
    "id": 6,
    "userId": 7,
    "user": {
      "id": 7,
      "name": "User 7"
    },
    "projectId": 4,
    "websiteId": 2,
    "type": "TRIGGER",
    "status": "COMPLETED",
    "subject": "DNS",
    "description": "DNS sync trigger executed",
    "createdAt": "2025-06-01T15:51:29Z",
    "updatedAt": "2025-06-01T17:39:48Z"
  },
  {
    "id": 7,
    "userId": 8,
    "user": {
      "id": 8,
      "name": "User 8"
    },
    "projectId": 1,
    "websiteId": 2,
    "type": "OPTIMIZE",
    "status": "FAILED",
    "subject": "OPTIMIZATION",
    "supportTicket": "SUP-6366",
    "description": "Enable optimization failed",
    "createdAt": "2025-05-11T04:53:32Z",
    "updatedAt": "2025-05-11T13:14:55Z",
    "information": {
      "type": "CONFIG",
      "detailsType": "deleting-config",
      "payload": {
        "feature": "image-optimizer",
        "enabled": false,
        "error": "missing-license"
      }
    }
  },
  {
    "id": 8,
    "userId": 4,
    "user": {
      "id": 4,
      "name": "User 4"
    },
    "projectId": 5,
    "websiteId": 1,
    "type": "INSTALL",
    "status": "COMPLETED",
    "subject": "APPLICATION",
    "applicationId": "tls-terminator",
    "description": "TLS terminator installed",
    "createdAt": "2025-07-10T01:01:02Z",
    "updatedAt": "2025-07-10T10:04:19Z",
    "requestId": "96b03d8c-f7fa-4fba-8f7f-699a557ee0d6"
  },
  {
    "id": 9,
    "userId": 3,
    "user": {
      "id": 3,
      "name": "User 3"
    },
    "projectId": 2,
    "websiteId": 3,
    "type": "DELETE",
    "status": "COMPLETED",
    "subject": "TARGET",
    "supportTicket": "SUP-8126",
    "description": "Target removed from pool",
    "createdAt": "2025-05-08T18:57:24Z",
    "updatedAt": "2025-05-09T14:34:08Z"
  },
  {
    "id": 10,
    "userId": 2,
    "user": {
      "id": 2,
      "name": "User 2"
    },
    "projectId": 3,
    "websiteId": 2,
    "type": "CREATE",
    "status": "COMPLETED",
    "subject": "CERTIFICATE",
    "description": "ACME order created",
    "createdAt": "2025-05-03T20:02:12Z",
    "updatedAt": "2025-05-04T22:59:29Z"
  },
  {
    "id": 11,
    "userId": 5,
    "user": {
      "id": 5,
      "name": "User 5"
    },
    "projectId": 1,
    "websiteId": 3,
    "type": "UPDATE",
    "status": "COMPLETED",
    "subject": "DNS",
    "description": "A record updated",
    "createdAt": "2025-06-29T05:28:54Z",
    "updatedAt": "2025-06-30T20:40:30Z",
    "information": {
      "type": "DNS",
      "detailsType": "updating-dns-record",
      "payload": {
        "recordType": "A",
        "host": "www",
        "before": "203.0.113.10",
        "after": "203.0.113.42",
        "ttl": 300
      }
    }
  },
  {
    "id": 12,
    "userId": 6,
    "user": {
      "id": 6,
      "name": "User 6"
    },
    "projectId": 2,
    "websiteId": 1,
    "type": "RENEWAL",
    "status": "IN_PROGRESS",
    "subject": "CERTIFICATE",
    "description": "Certificate renewal started",
    "createdAt": "2025-04-09T01:27:28Z",
    "updatedAt": "2025-04-09T13:21:43Z",
    "requestId": "7aa802e5-e016-43f7-ab61-d188d7dc98b2"
  },
  {
    "id": 13,
    "userId": 9,
    "user": {
      "id": 9,
      "name": "User 9"
    },
    "projectId": 4,
    "websiteId": 3,
    "type": "DUPLICATE",
    "status": "COMPLETED",
    "subject": "OPTIMIZATION",
    "description": "Copied optimization settings to staging",
    "createdAt": "2025-04-20T22:08:36Z",
    "updatedAt": "2025-04-20T22:30:00Z"
  },
  {
    "id": 14,
    "userId": 4,
    "user": {
      "id": 4,
      "name": "User 4"
    },
    "projectId": 5,
    "websiteId": 2,
    "type": "UNPLUG",
    "status": "COMPLETED",
    "subject": "PLUG",
    "description": "Feature unplugged for maintenance",
    "createdAt": "2025-05-06T16:17:38Z",
    "updatedAt": "2025-05-06T17:06:44Z",
    "requestId": "8ab4e9c7-56bb-44e3-be05-008430681fb0"
  },
  {
    "id": 15,
    "userId": 7,
    "user": {
      "id": 7,
      "name": "User 7"
    },
    "projectId": 4,
    "websiteId": 1,
    "type": "FLUSH_CACHE",
    "status": "IN_PROGRESS",
    "subject": "CACHE",
    "description": "Purging cache by tag",
    "supportTicket": "SUP-8808",
    "createdAt": "2025-05-10T07:33:53Z",
    "updatedAt": "2025-05-10T08:28:30Z"
  },
  {
    "id": 16,
    "userId": 3,
    "user": {
      "id": 3,
      "name": "User 3"
    },
    "projectId": 4,
    "websiteId": 3,
    "type": "OPTIMIZE",
    "status": "FAILED",
    "subject": "OPTIMIZATION",
    "description": "Toggle optimization failed",
    "createdAt": "2025-07-12T17:02:32Z",
    "updatedAt": "2025-07-12T17:04:32Z",
    "information": {
      "type": "CONFIG",
      "detailsType": "deleting-config",
      "payload": {
        "feature": "lazyload",
        "enabled": false,
        "error": "invalid-selector"
      }
    }
  },
  {
    "id": 17,
    "userId": 6,
    "user": {
      "id": 6,
      "name": "User 6"
    },
    "projectId": 5,
    "websiteId": 1,
    "type": "PLUG",
    "status": "COMPLETED",
    "subject": "PLUG",
    "description": "Plugin enabled",
    "createdAt": "2025-06-18T11:12:08Z",
    "updatedAt": "2025-06-18T12:15:04Z",
    "requestId": "1e8d0a3a-6c3a-4770-8f3e-8d5e4f5b3b2c"
  },
  {
    "id": 18,
    "userId": 1,
    "user": {
      "id": 1,
      "name": "User 1"
    },
    "projectId": 2,
    "websiteId": 2,
    "type": "ADD",
    "status": "COMPLETED",
    "subject": "USER",
    "description": "User provisioned",
    "supportTicket": "SUP-4452",
    "createdAt": "2025-04-22T09:46:18Z",
    "updatedAt": "2025-04-22T10:22:41Z"
  },
  {
    "id": 19,
    "userId": 2,
    "user": {
      "id": 2,
      "name": "User 2"
    },
    "projectId": 3,
    "websiteId": 1,
    "type": "PLUG",
    "status": "IN_PROGRESS",
    "subject": "PLUG",
    "description": "New plugin enabling",
    "createdAt": "2025-04-30T02:05:13Z",
    "updatedAt": "2025-04-30T02:43:22Z"
  },
  {
    "id": 20,
    "userId": 10,
    "user": {
      "id": 10,
      "name": "User 10"
    },
    "projectId": 1,
    "websiteId": 1,
    "type": "CREATE",
    "status": "COMPLETED",
    "subject": "CACHE",
    "description": "Cache namespace created",
    "createdAt": "2025-04-12T12:15:02Z",
    "updatedAt": "2025-04-12T12:47:18Z"
  },
  {
    "id": 21,
    "userId": 8,
    "user": {
      "id": 8,
      "name": "User 8"
    },
    "projectId": 4,
    "websiteId": 3,
    "type": "UPDATE",
    "status": "COMPLETED",
    "subject": "CONFIG",
    "description": "Config patch applied",
    "createdAt": "2025-07-05T14:31:42Z",
    "updatedAt": "2025-07-05T15:12:00Z",
    "requestId": "31acd9e5-668b-4b4e-9c2b-7938db134c3c",
    "information": {
      "type": "CONFIG",
      "detailsType": "deleting-config",
      "payload": {
        "path": "/edge/features/rollout",
        "before": {
          "canary": true,
          "ratio": 0.1
        },
        "after": {
          "canary": false,
          "ratio": 0
        }
      }
    }
  },
  {
    "id": 22,
    "userId": 4,
    "user": {
      "id": 4,
      "name": "User 4"
    },
    "projectId": 2,
    "websiteId": 2,
    "type": "FLUSH_CACHE",
    "status": "FAILED",
    "subject": "CACHE",
    "supportTicket": "SUP-7321",
    "description": "Flush attempt failed",
    "createdAt": "2025-06-11T18:22:55Z",
    "updatedAt": "2025-06-11T18:45:01Z"
  },
  {
    "id": 23,
    "userId": 3,
    "user": {
      "id": 3,
      "name": "User 3"
    },
    "projectId": 5,
    "websiteId": 3,
    "type": "UPLOAD",
    "status": "COMPLETED",
    "subject": "JOB",
    "description": "Batch upload finished",
    "createdAt": "2025-05-14T09:11:44Z",
    "updatedAt": "2025-05-14T10:09:00Z",
    "requestId": "5d1a5f4b-b9e0-4e9a-9b79-3e8f7b50f2a7"
  },
  {
    "id": 24,
    "userId": 5,
    "user": {
      "id": 5,
      "name": "User 5"
    },
    "projectId": 3,
    "websiteId": 1,
    "type": "OPTIMIZE",
    "status": "IN_PROGRESS",
    "subject": "OPTIMIZATION",
    "description": "Optimization task queued",
    "createdAt": "2025-06-23T23:52:30Z",
    "updatedAt": "2025-06-24T00:32:18Z",
    "requestId": "4d5c9f01-6ca1-4c0b-934d-ad916fe0afd9",
    "information": {
      "type": "CONFIG",
      "detailsType": "upserting-vhost",
      "payload": {
        "feature": "brotli",
        "enabled": true
      }
    }
  },
  {
    "id": 25,
    "userId": 7,
    "user": {
      "id": 7,
      "name": "User 7"
    },
    "projectId": 1,
    "websiteId": 2,
    "type": "UNPLUG",
    "status": "IN_PROGRESS",
    "subject": "PLUG",
    "description": "Plugin removal started",
    "createdAt": "2025-04-18T05:09:22Z",
    "updatedAt": "2025-04-18T05:09:22Z"
  }
]