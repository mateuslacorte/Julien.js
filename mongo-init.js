db.createUser(
    {
        user: "example",
        pwd: "example",
        roles: [
            {
                role: "dbOwner",
                db: "julien"
            }
        ]
    }
);