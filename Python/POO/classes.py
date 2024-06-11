class Data:
    def __init__(self, type, description):
        self.type = type
        self.description = description
    def read(self):
        print('Type:', self.type,'\nDescription:', self.description)
booksData = Data('List', 'A list of booking data from a Hotel')
booksData.read()