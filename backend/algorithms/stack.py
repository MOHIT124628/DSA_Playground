class Stack:

    def __init__(self):
        self.stack=[]

    def push(self,value):
        self.stack.append(value)

    def pop(self):
        if len(self.stack)==0:
            return None
        return self.stack.pop()
    
    def get_stack(self):
        return self.stack