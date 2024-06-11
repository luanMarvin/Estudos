class Auth:
    def __init__(self, name):
        self.name = name
    def readAuth(self):
        pass
    def readAll(self):
        print(self.name)
        self.readAuth()

class Client(Auth):
    def readAuth(self):
        print('Client Auth')

class Admin(Auth):
    def readAuth(self):
        print('Admin Auth')

customer = Client('Lucy')
ceo = Admin('Marvin')

def readAllData(Auth):
    Auth.readAll()

readAllData(customer)
readAllData(ceo)