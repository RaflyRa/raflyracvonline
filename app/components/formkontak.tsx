'use client'; // Menandai komponen ini sebagai Client Component

import React, { useState, useEffect } from 'react';

function Rating() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [allRatings, setAllRatings] = useState<number[]>([]);
  const [feedbacks, setFeedbacks] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem('allRatings') || '[]');
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    setAllRatings(savedRatings);
    setFeedbacks(savedFeedbacks);
  }, []);

  const averageRating = allRatings.length ? (allRatings.reduce((a, b) => a + b, 0) / allRatings.length).toFixed(1) : '0';
  const ratingPercentage = allRatings.length ? ((Number(averageRating) / 5) * 100).toFixed(1) : '0';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && comment && rating) {
      const newRatings = [...allRatings, rating];
      const newFeedbacks = [...feedbacks, { name, comment }];
      setAllRatings(newRatings);
      setFeedbacks(newFeedbacks);
      localStorage.setItem('allRatings', JSON.stringify(newRatings));
      localStorage.setItem('feedbacks', JSON.stringify(newFeedbacks));
      alert("Komentar dan rating berhasil dikirim!");
      setName('');
      setComment('');
      setRating(0);
    } else {
      alert("Mohon isi semua kolom dan pilih rating.");
    }
  };

  const handleDelete = (index: number) => {
    const newFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(newFeedbacks);
    alert("Komentar berhasil dihapus! (permanen dari tampilan, tetapi masih di localStorage)");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", color: "#4B3832" }}>
      <h2 style={{ color: "#C0A57D", textShadow: "0 0 5px #C0A57D, 0 0 10px #C0A57D" }}>Formulir Komentar</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="name" style={{ color: "#C0A57D", fontWeight: "bold" }}>Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", color: "#C0A57D", backgroundColor: "#4B3832", border: "1px solid #C0A57D" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="comment" style={{ color: "#C0A57D", fontWeight: "bold" }}>Komentar:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            style={{ width: "100%", padding: "8px", color: "#C0A57D", backgroundColor: "#4B3832", border: "1px solid #C0A57D" }}
          />
        </div>

        <div style={{ marginBottom: "1em" }}>
          <label style={{ color: "#C0A57D", fontWeight: "bold" }}>Rating:</label>
          <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  fontSize: "24px",
                  cursor: "pointer",
                  color: star <= rating ? "#DAA520" : "#BEBEBE"
                }}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#4B3832", color: "#C0A57D", border: "1px solid #C0A57D", cursor: "pointer" }}>
          Kirim Komentar
        </button>
      </form>

      <div style={{ marginTop: "2em" }}>
        <h3 style={{ color: "#DAA520" }}>
          Rata-Rata Rating: {averageRating} dari 5 bintang
        </h3>
        <div style={{ width: "100%", backgroundColor: "#ddd", borderRadius: "5px", height: "20px" }}>
          <div style={{ width: `${ratingPercentage}%`, backgroundColor: "#DAA520", height: "100%", borderRadius: "5px" }} />
        </div>
        <div style={{ textAlign: "center", color: "#C0A57D" }}>
          {ratingPercentage}% / 100%
        </div>
      </div>

      <div style={{ marginTop: "2em" }}>
        <h3 style={{ color: "#C0A57D" }}>Daftar Komentar</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px", color: "#C0A57D" }}>Nama</th>
              <th style={{ border: "1px solid #ddd", padding: "8px", color: "#C0A57D" }}>Komentar</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px", color: "#C0A57D" }}>{feedback.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px", color: "#C0A57D" }}>{feedback.comment}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button onClick={() => handleDelete(index)} style={{ backgroundColor: "#8B0000", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rating;
