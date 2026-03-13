from flask import Flask,request,jsonify
from flask_cors import CORS

from algorithms.sorting import bubble_sort
from algorithms.searching import binary_search
from algorithms.stack import Stack
from algorithms.queue_ds import Queue
from algorithms.linear_search import linear_search
from algorithms.quicksort import quick_sort

app=Flask(__name__)
CORS(app)

stack=Stack()
queue=Queue()

#HOME ROUTE

@app.route("/")
def home():
    return jsonify({"message":"DSA Playground API Running"})

#SORTING

@app.route("/sort", methods=["POST"])
def sort_array():
    data = request.json
    if "array" not in data:
        return jsonify({"error": "array is required"}), 400
    arr = data["array"]
    result = bubble_sort(arr)
    return jsonify({"sorted": result})

@app.route("/sort/quick",methods=["POST"])
def quick_sort_array():
    data=request.get_json()
    if "array" not in data:
        return jsonify({"error":"array is required"}), 400
    arr=data["array"]
    result=quick_sort(arr)
    return jsonify({"sorted":result})

#SEARCHING

@app.route("/search/binary", methods=["POST"])
def search_array():
    data = request.get_json()
    if "array" not in data or "target" not in data:
        return jsonify({"error": "array and target required"}), 400
    arr = data["array"]
    target = data["target"]
    index = binary_search(arr, target)
    return jsonify({"index": index})

@app.route("/search/linear", methods=["POST"])
def search_linear():
    data=request.get_json()
    if "array" not in data or "target" not in data:
        return jsonify({"error":"array and target required"}),400
    arr=data["array"]
    target=data["target"]
    index=linear_search(arr,target)
    return jsonify({"index":index}) 

#STACK

@app.route("/stack/push", methods=["POST"])
def push_stack():
    data = request.json
    if "value" not in data:
        return jsonify({"error": "value required"}), 400
    stack.push(data["value"])
    return jsonify({"stack": stack.get_stack()})

@app.route("/stack/pop",methods=["GET"])
def pop_stack():
    value=stack.pop()
    return jsonify({"popped":value,"stack":stack.get_stack()})

#QUEUE

@app.route("/queue/enqueue",methods=["POST"])
def enqueue_queue():
    data=request.get_json()
    if "value" not in data:
        return jsonify({"error":"value required"}),400
    queue.enqueue(data["value"])
    return jsonify({"queue":queue.get_queue()})

@app.route("/queue/dequeue",methods=["GET"])
def dequeue_queue():
    value=queue.dequeue()
    return jsonify({
        "dequeued":value,
        "queue":queue.get_queue()
    })

#MAIN

if __name__=="__main__":
    app.run(debug=True)