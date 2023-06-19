import React from "react";
import "./DegreeCard.css";

function DegreeCard({degree}) {
    return (
        <div className="degree-card">
            {degree.logoPath && (
                <div className="card-img">
                    <img
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            transform: "scale(0.9)",
                        }}
                        src={require(`../../Assets/images/${degree.logoPath}`)}
                        alt="Education"
                    />
                </div>
            )}
            <div
                className="card-body"
                style={{width: degree.logoPath ? "90%" : "100%"}}
            >
                <div
                    className="body-header"
                >
                    <div className="body-header-title">
                        <h2 className="card-title">
                            {degree.title}
                        </h2>
                        <h3 className="card-subtitle">
                            {degree.subtitle}
                        </h3>
                    </div>
                    <div className="body-header-duration">
                        <h3 className="duration">
                            {degree.duration}
                        </h3>
                    </div>
                </div>
                <div className="body-content">
                    {degree.descriptions.map((sentence) => {
                        return (
                            <p className="content-list" key={sentence}>
                                {sentence}
                            </p>
                        );
                    })}
                    {degree.url && (
                        <a
                            href={degree.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="visit-btn">
                                <p className="btn">
                                    <strong>Visit Website</strong>
                                </p>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DegreeCard;
