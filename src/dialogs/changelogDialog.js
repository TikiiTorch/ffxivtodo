/** React */
import React from 'react';

/** react-bootstrap */
import Modal from 'react-bootstrap/Modal';

export function ChangeLog({ isModalOpen, hideModal }) {

	return (
		<Modal show={isModalOpen} onHide={hideModal} animation={true}>
			<Modal.Header closeButton>
				<Modal.Title>FFXIV Todo Tracker Beta</Modal.Title>
			</Modal.Header>
			<Modal.Body className='changeLog'>
				<p><strong>Thank you for helping to test this beta version!</strong></p>
				<p>Please report any issues or suggestions on the <a href='https://github.com/Brunhine/ffxivtodo/issues' target='blank'>GitHub issue Tracker</a></p>
				<hr />
				<h3>v0.7.1</h3>
				<ul>
					<li>Updated Libraries</li>
				</ul>
				<hr />
				<h3>v0.7.0</h3>
				<ul>
					<li>New feature: Custom Items
						<ul>
							<li>Add or remove your own custom items to each list</li>
							<li>Found in the 'Options' menu</li>
						</ul>
					</li>
				</ul>
				<hr />
				<h3>v0.6.0</h3>
				<ul>
					<li>Added links for GamerEscape wiki</li>
					<li>Added notification icon for new version releases</li>
					<li>Added new preferences window
						<ul>
							<li>Added ability to hide specific link sources</li>
							<li>Added option to always expand the 'more info' section</li>
						</ul>
					</li>
				</ul>
				<hr />
				<h3>v0.5.0</h3>
				<ul>
					<li>Added ability to hide and show specific items in the list under 'options'</li>
				</ul>
				<hr />
				<h3>v0.4.0</h3>
				<h4>Fixes</h4>
				<ul>
					<li>Completed items will now sort to the bottom of the list on a user's first visit</li>
				</ul>
				<h4>Enhancements</h4>
				<ul>
					<li>Move the 'more info' section to a collapsing section to accomodate future improvements</li>
					<li>Added countdown timer to server reset time</li>
					<li>Section headers and progress bar now stick to the top of each column when scrolling</li>
				</ul>
				<hr />
				<h3>v0.3.0</h3>
				<ul>
					<li>Reset buttons now disable and re-enable based on the state of their respective lists</li>
				</ul>
				<hr />
				<h3>v0.2.0</h3>
				<ul>
					<li>Added confirmation dialog when resetting progress</li>
				</ul>
				<hr />
				<h3>v0.1.0</h3>
				<ul>
					<li>Initial testing release</li>
				</ul>
			</Modal.Body>
		</Modal>

	);
}