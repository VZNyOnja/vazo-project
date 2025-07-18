from flask import Flask, request, jsonify
import whisperx
import os


app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/transcribe", methods=["POST"])
def transcribe():
    if "audio_file" not in request.files:
        return jsonify({"error": "No file sent"}), 400

    audio = request.files["audio_file"]
    path = os.path.join(UPLOAD_FOLDER, audio.filename)
    audio.save(path)

    # whisperX
    model = whisperx.load_model("medium", device="cpu")
    result = model.transcribe(path)

    align_model, metadata = whisperx.load_align_model(result["language"], device="cpu")
    aligned = whisperx.align(result["segments"], align_model, metadata, path, device="cpu")

    return jsonify({
        
        #"words": aligned["word_segments"],  # mot par mot
        #"filename": audio.filename,
        #"audioUrl": f"http://localhost:5000/static/audio/{audio.filename}"
        
        "success": True,
        "filename": audio.filename,   # <-- indispensable pour la redirection
        "words": aligned["word_segments"]
    })

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
