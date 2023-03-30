import sys
import pymongo
import pprint
import json
import codecs
from tkinter import messagebox


class DataController:

    def __init__(self):  # Initializer method
        mongo_uri = "mongodb://localhost:27017/"  # local dB
        #  Remote MongoDB
        # mongo_atlas_remote = "mongodb+srv://cyteam_user:cy2019!@cyteam-db-sanud.gcp.mongodb.net/cy-main?retryWrites=true&w=majority"
        self.connection_failed = False
        try:
            self.client = pymongo.MongoClient(mongo_uri)
            #  the Data Base
            self.db = self.client['biosimulations']
            # the collection
            self.collection = self.db['simulators']
        except Exception as e:
            self.connection_failed = True
            print("Exception in MongoDB connection initialization:  " + str(e))
            messagebox.showinfo("MongoDb ", "Error: " + str(e))

        if self.connection_failed:
            print("Connection to dB failed")
        else:
            print("Successfully connected to the DataBase ")

    def end_connection(self):
        self.client.close()
        print("Connection to Database closed")

    def add_item(self, json_item):
        post_id = self.collection.insert_one(json_item)
        print(post_id)

    def get_items(self):
        results = self.collection.find()
        return results


"""
Now how to read a JSON file and insert the items into the MongoDB

"""


def load_and_show(filename):
    pp = pprint.PrettyPrinter(indent=4)
    # file = open(filename, encoding="utf8")
    with open(filename,  encoding="utf8") as json_file:
        jsonObjects = json.load(json_file)
        print("Num = ", len(jsonObjects))
        count = 0
        for item in jsonObjects:
            # pp.pprint(item)
            count += 1
            print(count)



def main():
    db_ctrl = DataController()
    if db_ctrl.connection_failed:
        print("Client NOT OK, connection failed")
        exit()
    else:
        print("Client OK")
        # exit()

    results = list(db_ctrl.get_items())
    # pp = pprint.PrettyPrinter(indent=4)
    # # pp.pprint(results)
    # datetime_format = "%Y-%m-%d %H:%M:%S"
    print(len(results))
    # for item in results:
    #     pp.pprint(item['name'])
    #     pp.pprint(item['description'])
    #     pp.pprint(item['ownerId'])
    #     # pp.pprint(item['createdDate'])
    #     time_str = item['createdDate'].isoformat()
    #     pp.pprint(" CreateDate --------------------")
    #     pp.pprint(time_str)
    print('===========================================')
    print('= Do something:                           =')
    print('===========================================')
    # load_and_show('simulators-json-data.json')
    filename = 'simulators-json-data.json'
    with open(filename,  encoding="utf8") as json_file:
        jsonObjects = json.load(json_file)
        print("Num = ", len(jsonObjects))
        count = 0
        for item in jsonObjects:
            db_ctrl.add_item(item)
            count += 1
            print(count)


if __name__ == '__main__':
    print('This program is being run by itself')
    print('Python/System version:')
    print(sys.version)
    main()
else:
    print(' Data Connection, I am being imported from another module')
