# OcmDataMiner

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve cm-api` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


```grapql
query {
  pois(first: 10) {
    edges {
      cursor
      node {
        _id
        OperatorInfo {
          WebsiteURL
          PhonePrimaryContact
          IsPrivateIndividual
          ContactEmail
          IsRestrictedEdit
          ID
          Title
        }
        StatusType {
          IsOperational
          IsUserSelectable
          ID
          Title
        }
        AddressInfo {
          ID
          Title
          AddressLine1
          Town
          StateOrProvince
          Postcode
          CountryID
          Country {
            ISOCode
            ContinentCode
            ID
            Title
          }
          Latitude
          Longitude
          DistanceUnit
        }
        Connections {
          ID
          ConnectionTypeID
          ConnectionType {
            FormalName
            IsDiscontinued
            IsObsolete
            ID
            Title
          }
          StatusType {
            IsOperational
            IsUserSelectable
            ID
            Title
          }
          StatusTypeID
          Level {
            Comments
            IsFastChargeCapable
            ID
            Title
          }
          LevelID
          PowerKW
          CurrentTypeID
          CurrentType {
            Description
            ID
            Title
          }
          Quantity
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
