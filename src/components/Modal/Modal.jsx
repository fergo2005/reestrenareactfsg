// src/components/Modal/Modal.jsx
/* import './Modal.css';

export const Modal = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}; */

// src/components/Modal/Modal.jsx
import './Modal.css';

export const Modal = ({ open, onClose, icon, children }) => {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                <div className="modal-icon">
                    {icon}
                </div>

                <div className="modal-body">
                    {children}
                </div>

            </div>
        </div>
    );
};
