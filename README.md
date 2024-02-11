# How to install

```
npm install mongodb-query-helper
```

<br/>

# How to use

```
import { convertNested } from 'mongodb-query-helper'

const nestedQuery = {
    'fullName': {
        'name': 'Yusuf',
        'surname': 'Eren'
    },
    'externalId': 1,
    'address': {
        'city': 'Istanbul'
    }
}

convertNested(nestedQuery);
/*
{
  'fullName.name': 'Yusuf',
  'fullName.surname': 'Eren',
  externalId: 1,
  'address.city': 'Istanbul'
}
*/
```

---

<br/>

# Why I built this?

I was struggling to update specific fields with nested objects in MongoDB documents. MongoDB query was replacing the nested object instead of setting the new fields.
as an example;

```
// mongoshell

// Insert document
db.users.insertOne({ userId: 1, fullName: { 'name': 'Yusuf', 'surname': 'Eren'} })
// Output
[
  {
    _id: ObjectId('65c8f50d7b3b4b02d130e396'),
    userId: 1,
    fullName: { name: 'Yusuf', surname: 'Eren' }
  }
]

// Update name inside fullName
db.users.updateOne({ userId: 1 }, { $set: { fullName: { 'name': 'Yusuf' } } })

// Read the updated doc
db.users.findOne({ userId: 1 })
// Output
{
  _id: ObjectId('65c8f50d7b3b4b02d130e396'),
  userId: 1,
  fullName: { name: 'Yusuf' }
}
```

So I decided to build that package. Now, it converts the nested objects to mongodb's update structure to update single fields instead of replacing all fields of the object.

# Contribution & Support

If you want to contribute to package go to [repository](https://github.com/yusuf-eren/mongodb-query-helper) and create a pull request with a description :)
If you need support please contact me via <erenyusuf170@gmail.com>
