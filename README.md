# OcmDataMiner

Service #1 - ocm-data-importer: OCM data importer from https://openchargemap.org  
Service #2 - cm-api:            GraphQL (relay) API   

To start services run: `yarn start.docker`

Than you can navigate to `http://localhost:3000/graphql` to run graphql query.


Example query
```grapql
query {
  pois(first: 10) {
    edges {
      cursor
      node {
        _id
        Connections {
          ID
          Quantity
        }
        OperatorInfo {
          Title
        }
        AddressInfo {
          Title
        }
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
  }
}
```

## Development server

Run `nx serve cm-api` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.


